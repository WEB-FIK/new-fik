"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { dekanatDetails } from '@/data/manajemenDetails'

const LHKPNPage = ({ params }: { params: { lhkpn: string } }) => {
  const router = useRouter();
  const { lhkpn } = params;

  useEffect(() => {
    const person = dekanatDetails.find(
      (person) => person.lhkpnRoute === `/manajemen/LHKPN/${lhkpn}`
    );

    if (person && person.linkLHKPN) {
      router.push(person.linkLHKPN);
    }
  }, [lhkpn, router]);

  return <div>Redirecting...</div>;
};

export default LHKPNPage;
