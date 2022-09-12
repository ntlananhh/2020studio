import Layout from "../../layouts";
import ProjectList from "../../components/project-list";
export default function HomePage() {
  return <Layout children={true}>
            <ProjectList/>
        </Layout>;
}
