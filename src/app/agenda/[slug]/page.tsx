import { notFound } from "next/navigation";
import { agendaItems } from "@/data/dataAgenda";
import Image from "next/image";
import DetailAgendaScheduleCard from "@/components/ui/AgendaCard/DetailAgendaScheduleCard";

interface AgendaDetailProps {
  params: {
    slug: string;
  };
}

export default function AgendaDetail({ params }: AgendaDetailProps) {
  const { slug } = params;

  console.log(slug);
  console.log(agendaItems);

  // Match the agenda item based on the generated slug
  const agendaItem = agendaItems.find((item) => item.slug === slug);

  // Handle not found case
  if (!agendaItem) {
    return notFound();
  }

  return (
    <section className="w-full flex flex-col space-y-6 px-4 py-8 md:px-[100px]">
      <h1 className="text-3xl font-bold">{agendaItem.AgendaTitle}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src={agendaItem.imageSrc}
          alt={agendaItem.AgendaTitle}
          className="w-full md:w-2/3"
        />
        <DetailAgendaScheduleCard
          date={agendaItem.AgendaDate + " " + agendaItem.AgendaMonth}
          hour={agendaItem.AgendaHour}
          location={agendaItem.AgendaLocation}
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold md:text-4xl">About the Event</h2>
        <p className="font-medium md:text-xl">
          Seminar Nasional Mahasiswa Bidang Ilmu Komputer dan Aplikasinya
          (SENAMIKA) - 7 is an event that invites students, researchers, and
          practitioners in the field of information and communication technology
          to disseminate their research results. Topics of interest include Data
          Science, Artificial Intelligence, Multimedia, Cybersecurity, and more.
          Join us to explore these exciting fields with expert speakers!
        </p>
        <h3 className="text-2xl font-bold mt-4 md:text-4xl">Speakers</h3>
        <ul className="list-disc ml-5 font-medium md:text-xl">
          <li>
            Dr. Ermatita, M. Kom. (Dean, Faculty of Computer Science, UPN
            Veteran Jakarta)
          </li>
          <li>
            Dr. Jaidian Jauhari, M.T. (Dean, Faculty of Computer Science,
            Universitas Sriwijaya)
          </li>
          <li>
            Wayan Widi P., S.Kom., MTI (Lecturer, Faculty of Computer Science,
            UPN Veteran Jakarta)
          </li>
        </ul>
        <h3 className="text-2xl font-bold mt-4 md:text-4xl">Important Dates</h3>
        <ul className="list-disc ml-5 md:text-xl">
          <li>Paper Submission: 20 February - 28 February 2023</li>
          <li>Acceptance Notification: 5 March 2023</li>
          <li>Camera Ready: 10 March 2023</li>
          <li>Seminar: 16 March 2023</li>
        </ul>
        <h3 className="text-2xl font-bold mt-4 md:text-4xl">Registration</h3>
        <p className="md:text-xl">
          Register here:{" "}
          <a
            href="https://bit.ly/Senamika_7_2023"
            className="text-blue-500 underline"
          >
            https://bit.ly/Senamika_7_2023
          </a>
        </p>
        <p className="md:text-xl">
          For more information: <br />
          📲 +6285899159983 (Astri) <br />
          📲 +6281225720630 (Elsa)
        </p>
      </div>
    </section>
  );
}
