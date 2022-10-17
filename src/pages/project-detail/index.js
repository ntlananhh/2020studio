import Layout from "../../layouts";
import ProjectDetail from "../../components/project-detail";
export default function ProjectDetailPage() {
  return <Layout children={true}>
    <div className="project-slider">
      <ProjectDetail />
    </div>
  </Layout>;
}
