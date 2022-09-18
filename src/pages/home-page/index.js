import Layout from "../../layouts";
import ProjectList from "../../components/project-list";
import { useParams } from "react-router-dom";

export default function HomePage() {
  let category = useParams().category;
  return <Layout children={true}>
            <ProjectList category={category ? category : ''} />
        </Layout>;
}
