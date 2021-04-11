import Layout from '../components/Layout';
import CreateContactForm from '../components/forms/CreateContactForm';
import ContactsList from '../components/ContactsList';

function ContactsView() {
  return (
    <Layout title="Contacts">
      <CreateContactForm />
      <ContactsList />
    </Layout>
  );
}

export default ContactsView;
