import { getContacts, getFilter } from 'redux/selectors';
import { ContactTemplate } from '../ContactTemplate/ContactTemplate';
import { StyledContacts } from './ContactsStyled';
import { useSelector } from 'react-redux';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(filter);

  const formattedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(formattedFilter)
  );

  return (
    <StyledContacts>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactTemplate key={id} name={name} number={number} id={id} />
      ))}
    </StyledContacts>
  );
};
