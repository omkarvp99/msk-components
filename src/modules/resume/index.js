// Export the component in this file to display in the preview

import metadata from './metadata';

import Cover from './cover';
import Introduction from './introduction';
import Experience from './experience';
import Education from './education';
import Projects from './projects';
import Skillset from './skill-set';
import SocialLinks from './social-links';
import Interests from './interests';
import language from './language';

const components = {
  Cover,
  Introduction,
  Experience,
  Education,
  Projects,
  Skillset,
  Interests,
  SocialLinks,
  language
};

const Resume = {
  metadata,
  components
};

export default Resume;
