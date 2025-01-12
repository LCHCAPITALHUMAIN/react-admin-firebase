import * as React from 'react';
import { PostList, PostShow, PostCreate, PostEdit } from './posts';
import { UserList, UserShow, UserCreate, UserEdit } from './users/users';
import { ProductList, ProductShow, ProductCreate, ProductEdit } from './products/products';
// import { OrderList, OrderShow, OrderCreate, OrderEdit } from './orders/orders';
import { Admin, Resource } from 'react-admin';
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from 'react-admin-firebase';
import firebase from 'firebase';
import UserIcon from '@material-ui/icons/People';

import CustomLoginPage from './CustomLoginPage';

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const authProvider = FirebaseAuthProvider(firebaseConfig);
const dataProvider = FirebaseDataProvider(firebaseConfig, {
  logging: true,
  // rootRef: 'rootrefcollection/QQG2McwjR2Bohi9OwQzP',
  app: firebaseApp,
  // watch: ['posts'];
  // dontwatch: ['comments'];
  persistence: 'local',
  // disableMeta: true
  dontAddIdFieldToDoc: true,
  lazyLoading: {
    enabled: true,
  },
  firestoreCostsLogger: {
    enabled: true,
  },
});

class App extends React.Component {
  render() {
    return (
      <Admin
        loginPage={CustomLoginPage}
        dataProvider={dataProvider}
        authProvider={authProvider}
      >
        <Resource
          name="orders"
          list={PostList}
          show={PostShow}
          create={PostCreate}
          edit={PostEdit}
        />
        <Resource
          name="users"
          icon={UserIcon}
          list={UserList}
          show={UserShow}
          create={UserCreate}
          edit={UserEdit}
        />
        <Resource
          name="produits"
          icon={UserIcon}
          list={ProductList}
          show={ProductShow}
          create={ProductCreate}
          edit={ProductEdit}
        />
      </Admin>
    );
  }
}

export default App;
