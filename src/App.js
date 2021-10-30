import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddNewDestination from './Components/AddNewDestination/AddNewDestination';
import AddNewPackage from './Components/AddNewPackage/AddNewPackage';
import BookingForm from './Components/BookingForm/BookingForm';
import DestinationDetails from './Components/Destinations/DestinationDetails/DestinationDetails';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Home/HomePage/HomePage';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import PackageDetails from './Components/Packages/PackageDetails/PackageDetails';

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
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
