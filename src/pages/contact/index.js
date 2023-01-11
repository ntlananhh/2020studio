import Layout from "../../layouts";
import Contact from "../../components/contact";
export default function ContactPage() {
  return <Layout children={true} aboutus={true}>
            <Contact></Contact>
        </Layout>;
}
