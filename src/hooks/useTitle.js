import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Yoga & Meditation | ${title}`;
  }, [title]);
};

export default useTitle;