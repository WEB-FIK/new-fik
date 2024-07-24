export default function Page({ params }: { params: { slug: string } }) {
    return <div>Profile of: {params.slug}</div>
}