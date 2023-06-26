import { useEffect, useState } from "react";


const useInstructorClass = () => {
    const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/instructorClasses")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
    return [classes]
};

export default useInstructorClass;