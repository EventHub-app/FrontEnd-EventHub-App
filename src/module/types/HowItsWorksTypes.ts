import type { LucideProps } from "lucide-react";

export interface   HowItsWorksCardTypes {
      Icon:React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
      title:string,
      text:string

}