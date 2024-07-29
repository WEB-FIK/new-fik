import ImacIcon from "@/components/Icons/ImacIcon"
import StudentsIcon from "@/components/Icons/StudentsIcon"
export interface PeminatanProgramStudi {
    icon: string;
    title: string;
    subtitle: string;
}

export const peminatanSarjanaSistemInformasi: PeminatanProgramStudi[] = [
    {
        icon: "ImacIcon",
        title: "Pengembangan Aplikasi",
        subtitle: "Pengembang Aplikasi Mobile, Pengembang Aplikasi Web, Pengembang Aplikasi Berbasis Cloud, dsb."
    },
    {
        icon: "ImacIcon",
        title: "Analisis Data",
        subtitle: "Data Scientist, Data Analyst, Data Engineer, Business Intelligence (BI) Developer, Data Architect, Machine Learning Engineer, dsb."
    },
    {
        icon: "ImacIcon",
        title: "Audit Teknologi Informasi ",
        subtitle: "Internal Auditor TI, Eksternal Auditor TI, Konsultan Keamanan TI, Peneliti Keamanan TI, Manajer Audit TI, Auditor Kepatuhan Regulasi, dsb."
    },
]

export const peminatanSarjanaInformatika: PeminatanProgramStudi[] = []

export const peminatanSarjanaSainsData: PeminatanProgramStudi[] = []

export const peminatanDiplomaSistemInformasi: PeminatanProgramStudi[] = [
    {
        icon: "StudentsIcon",
        title: "Data Mining",
        subtitle: "Data Scientist, Data Analyst, Data Engineer, Business Intelligence (BI) Developer, Data Architect, Machine Learning Engineer, dsb."
    },
    {
        icon: "ImacIcon",
        title: "Visualisasi Data ",
        subtitle: "Data Scientist, Data Analyst, Data Engineer, Business Intelligence (BI) Developer, Data Architect, Machine Learning Engineer, dsb."
    },
    {
        icon: "ImacIcon",
        title: "Komunikasi Bisnis",
        subtitle: "Internal Auditor TI, Eksternal Auditor TI, Konsultan Keamanan TI, Peneliti Keamanan TI, Manajer Audit TI, Auditor Kepatuhan Regulasi, dsb."
    },
    {
        icon: "ImacIcon",
        title: "Pemrograman Web Lanjut",
        subtitle: "Pengembang Aplikasi Mobile, Pengembang Aplikasi Web, Pengembang Aplikasi Berbasis Cloud, dsb."
    },
    {
        icon: "ImacIcon",
        title: "Manajemen Kualitas Bisnis",
        subtitle: "Internal Auditor TI, Eksternal Auditor TI, Konsultan Keamanan TI, Peneliti Keamanan TI, Manajer Audit TI, Auditor Kepatuhan Regulasi, dsb."
    }
]
