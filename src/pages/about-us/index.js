import Layout from "../../layouts";
import AboutUs from "../../components/about-us";
export default function AboutUsPage() {
  return <Layout children={true} aboutus="true">
            <AboutUs></AboutUs>
        </Layout>;
}
