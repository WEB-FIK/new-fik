"use client";

import { useRouter } from 'next/router';
import React from 'react';
import { dekanatDetails, manajemenDetail } from '@/data/manajemenDetails';
import Link from 'next/link';

const LHKPNPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <div>Loading...</div>;
  }

  // Mencari data berdasarkan slug
  const dekanDetail: manajemenDetail | undefined = dekanatDetails.find((dekan) => {
    const routeSlug = dekan.lhkpnRoute?.split('/').pop();
    return routeSlug === slug;
  });

  if (!dekanDetail) {
    return <div>Detail tidak ditemukan</div>;
  }

  return (
    <div>
      <h1>{dekanDetail.name}</h1>
      <p>Position: {dekanDetail.position}</p>
      {dekanDetail.linkLHKPN && (
        <Link href={dekanDetail.linkLHKPN} target="_blank" rel="noopener noreferrer">
          Lihat LHKPN
        </Link>
      )}
    </div>
  );
};

export default LHKPNPage;
