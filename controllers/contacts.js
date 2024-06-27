const { Contact } = require("../models/contacts.js");

const contactStorage = require("../db/contacts.json");

const listContacts = () => {
  return contactStorage;
};

const getContactById = (contactId) => {
  return contactStorage.find((u) => u.id == contactId);
};

const removeContact = (contactId) => {
  let contacts = loadContacts();
  const index = contacts.findIndex((u) => u.id == contactId);
  if (index > -1) {
    contacts.splice(index, 1);
    saveContacts(contacts);
    return true;
  }
  return false;
};

const addContact = (body) => {
  const { error } = contactSchema.validate(body);
  if (error) {
    throw new Error(`Validation error: ${error.details[0].message}`);
  }
  const contacts = loadContacts();
  const existingIds = contacts.map((contact) => parseInt(contact.id));
  const newId = Math.max(...existingIds) + 1;
  const contact = new Contact(
    newId.toString(),
    body.name,
    body.email,
    body.phone
  );
  contacts.push(contact);
  saveContacts(contacts);
  return contact;
};

const updateContact = (contactId, body) => {
  const contacts = loadContacts();
  const index = contacts.findIndex((u) => u.id == contactId);
  if (index !== -1) {
    const updatedContact = {
      ...contacts[index],
      ...body,
      id: contacts[index].id,
    };
    const { error } = contactSchema.validate(updatedContact);
    if (error) {
      throw new Error(`Validation error: ${error.details[0].message}`);
    }
    contacts[index] = updatedContact;
    saveContacts(contacts);
    return updatedContact;
  }
  return null;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
