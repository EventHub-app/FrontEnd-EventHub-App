import type { LucideProps } from "lucide-react";

export interface CategoryItem{
   name:string,
   Icon:React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}