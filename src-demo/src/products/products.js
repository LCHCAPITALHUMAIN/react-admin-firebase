// in src/posts.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  DateField,
  ImageField,
  ImageInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  ReferenceField,
  SelectInput,
  ReferenceInput,
  FileInput,
  FileField,
  ArrayInput,
  SimpleFormIterator,
  ArrayField,
  useRecordContext,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import OrderItem from "./OrderItem";
import {
  Card,
  CardContent,
  Box,
  Grid,
  Typography,
  Link,
} from '@material-ui/core';
const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

const ReferenceFilter = (props) => (
  <Filter {...props}>
    <ReferenceInput
      label="Organization"
      source="user.id"
      reference="users"
      allowEmpty
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const ProductList = (props) => (

  <List
    {...props}
    // filters={<ReferenceFilter />}
    // filter={{ updatedby: "test@example.com" }}
  >
    <Datagrid>
      <TextField source="type" label="Type" />
      <TextField source="categorie" label="Catégorie" />
      <TextField source="name" label="Nom"/>
      <TextField source="price" label="Prix TTC" />
      <TextField source="price_unit" label="Prix Unitaire"/>
      <TextField source="quantity_box" label="NB / Carton" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const ProductShow = (props) => {

const PurpleTextField = ({ source }) => {
  const record = useRecordContext();
  console.log(record)
  return (<Box>
    <Typography>
      {record[source].first_name} {record[source].last_name}
    </Typography>
    <Typography> Adresse : {record[source].buildingNumber}, {record[source].streetName} </Typography>
    <Typography>
      Code postal : {record[source].pinCode} <br />
      Ville : {record[source].city} {record[source].state} {record[source].country}
    </Typography>
  </Box>);
};
  return ( <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="type" label="Type" />
      <TextField source="categorie" label="Catégorie"/>
      <TextField source="name" label="Nom" />
      <TextField source="price" label="Prix TTC" />
      <TextField source="price_unit" label="Prix Unitaire" />
      <TextField source="quantity_box" label="NB / Carton" />
    </SimpleShowLayout>
     
  </Show>)
};

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>

      <TextInput source="type" label="Type" />
      <TextInput source="categorie" label="Catégorie"/>
      <TextInput source="name" label="Nom" />
      <TextInput source="price" label="Prix TTC" />
      <TextInput source="price_unit" label="Prix Unitaire" />
      <TextInput source="quantity_box" label="NB / Carton" />
      <ReferenceInput
        label="User"
        source="user_id"
        reference="users"
        // filter={{ isAdmin: true }}
      >
        <SelectInput label="User" optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="type" label="Type" />
      <TextInput source="categorie" label="Catégorie"/>
      <TextInput source="name" label="Nom" />
      <TextInput source="price" label="Prix TTC" />
      <TextInput source="price_unit" label="Prix Unitaire" />
      <TextInput source="quantity_box" label="NB / Carton" />
    </SimpleForm>
  </Edit>
);