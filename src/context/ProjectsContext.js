import React, { createContext, useState } from 'react';

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects] = useState([
    {
      id: 1,
      title: 'Harnessing Predictive Models to Enhance Road Safety',
      description: 'An Econometric Investigation into Risk Compensation & A Test of Machine Learning Model Efficacy',
      details: `MY PAPER investigates the effectiveness of seatbelts as a safety mechanism, the influence of risky behaviors like alcohol and drug consumption on accident severity, and compares the predictive performance of machine learning models against econometric models in the context of vehicle-related fatalities. I find evidence supporting the life-saving potential of seatbelts and find significant associations between substance use and increased probability of death in severe accidents. I also find that ensemble-based machine learning models, specifically the random forest approach, demonstrate superior predictive performance compared to individual econometric models such as probit and logit models in the context of predicting automotive fatalities. However, despite the predictive accuracy of the random forest model, there are interpretability challenges when compared to the econometric models, which tend to provide more straightforward interpretability due to their simpler structure and easy-to-understand coefficients.`,
      technologies: ['Machine Learning', 'Econometrics', 'Random Forest'],
      image: process.env.PUBLIC_URL + '/images/Belting3.png',
      pdfUrl: process.env.PUBLIC_URL + '/resources/thesis.pdf'
    },
    {
      id: 2,
      title: 'Siphekela Isizwe Empowerment and Feeding Scheme - Website (2023)',
      description: 'Website development for an NGO in South Africa',
      details: `During my time doing research in South Africa, I was fortunate enough to develop relationships with several amazing NGOs. One of them was Siphekela Isizwe Empowerment and Feeding Scheme. Run by Lungi, they provide nutrition, empowerment, and relief to seniors and children in western Cape townships. To give Lungi and Siphekela Isizwe Empowerment and Feeding Scheme more visibility, I created a website that provides an overview of their work and a means by which people can assist. siphekelaisizwe.com`,
      technologies: ['Web Development', 'NGO', 'South Africa'],
      image: process.env.PUBLIC_URL + '/images/snap.png'
    }
  ]);

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
