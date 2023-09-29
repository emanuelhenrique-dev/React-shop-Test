import './styles.css';

import {Header} from '../../components/header'
import {SectionHome} from '../../components/section-home';
import { SectionCollection } from '../../components/section-collection';
import { SectionList } from '../../components/section-list';

export const Home = () => {
  return ( 
    <>
    <Header/>
    <SectionHome/>
    <SectionCollection/>
    <SectionList/>
    </>

  );
}
 


