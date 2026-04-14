type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    works: Required<TSection>;
    certificates: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Impana S — Portfolio",
    fullName: "Impana S",
    email: "impanasatheesh20@gmail.com",
  },
  hero: {
    name: "Impana S",
    p: ["Cloud, Data & AI Engineering student building scalable real-time data pipelines"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I’m a Cloud, Data & AI Engineering student skilled in building scalable real-time data pipelines and cloud-native analytics systems. I enjoy transforming raw data into reliable, intelligent solutions using modern distributed technologies.`,
    },
    experience: {
      p: "My work",
      h2: "Projects.",
      content: "Here are some of my recent projects.",
    },
    works: {
      p: "My certifications",
      h2: "Certificates.",
      content: `The following certifications highlight my continuous learning and dedication to improving my technical knowledge. 
  These certifications demonstrate my understanding of cloud computing, artificial intelligence, and modern development tools 
  through recognized training programs and practical learning experiences.`,
    },
    certificates: {
      p: "My certifications",
      h2: "Certificates.",
      content: `The following certifications highlight my continuous learning and dedication to improving my technical knowledge. 
  These certifications demonstrate my understanding of cloud computing, artificial intelligence, and modern development tools 
  through recognized training programs and practical learning experiences.`,
    },
  },
};
