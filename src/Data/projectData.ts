interface Project {
  id: number;
  name: string;
}

interface ProjectData {
  projects: Project[];
}

const projectData: ProjectData = {
  projects: [
    {
      id: 1,
      name: "TraderNest",
    },
    {
      id: 2,
      name: "API Access",
    },
    {
      id: 3,
      name: "Birdio",
    },
    {
      id: 4,
      name: "FlightDB",
    },
    {
      id: 5,
      name: "IHME",
    },
  ],
};

export default projectData;
