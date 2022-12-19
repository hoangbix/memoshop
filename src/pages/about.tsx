import React from 'react';
import DefaultLayout from 'src/layouts/DefaultLayout';

const About = () => {
  return <div>About</div>;
};

About.getLayout = (page: any) => <DefaultLayout>{page}</DefaultLayout>;

export default About;
