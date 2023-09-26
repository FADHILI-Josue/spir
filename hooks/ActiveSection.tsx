import { useActiveSectionContext } from "@/context/active-section-context";
import { SectionName } from "@/utils/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
}, [inView, setActiveSection, sectionName]);

return {
  ref,
};
}
