import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddNewDestination from './Components/AddNewDestination/AddNewDestination';
import AddNewPackage from './Components/AddNewPackage/AddNewPackage';
import AdminArea from './Components/AdminArea/AdminArea/AdminArea';
import BookingList from './Components/AdminArea/BookingList/BookingList';
import BookingForm from './Components/BookingForm/BookingForm';
import DestinationDetails from './Components/Destinations/DestinationDetails/DestinationDetails';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Home/HomePage/HomePage';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import PackageDetails from './Components/Packages/PackageDetails/PackageDetails';
import UpdateBooking from './Components/UpdateBooking/UpdateBooking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigationbar></Navigationbar>
        <Switch>
          <Route exact path='/'>
            <HomePage></HomePage>
          </Route>
          <Route path='/home'>
            <HomePage></HomePage>
          </Route>
          <Route path='/bookingform'>
            <BookingForm></BookingForm>
          </Route>
          <Route path='/packagedetails'>
            <PackageDetails></PackageDetails>
          </Route>
          <Route path='/destinationdetails'>
            <DestinationDetails></DestinationDetails>
          </Route>
          <Route path='/addnewdestination'>
            <AddNewDestination></AddNewDestination>
          </Route>
          <Route path='/addnewpackage'>
            <AddNewPackage></AddNewPackage>
          </Route>
          <Route exact path='/admin'>
            <AdminArea></AdminArea>
          </Route>
          <Route path='/admin/managebookings'>
            <BookingList></BookingList>
          </Route>
          <Route path='/bookinglist/:id'>
            <UpdateBooking></UpdateBooking>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
