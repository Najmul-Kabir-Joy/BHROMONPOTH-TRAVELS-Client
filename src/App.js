import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddNewDestination from './Components/AddNewDestination/AddNewDestination';
import AddNewPackage from './Components/AddNewPackage/AddNewPackage';
import AdminArea from './Components/AdminArea/AdminArea/AdminArea';
import BookingList from './Components/AdminArea/BookingList/BookingList';
import AllDestinations from './Components/AllDestinations/AllDestinations';
import AuthProvider from './Components/Context/AuthProvider/AuthProvider';
import BookingForm from './Components/BookingForm/BookingForm';
import DestinationDetails from './Components/Destinations/DestinationDetails/DestinationDetails';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Home/HomePage/HomePage';
import Login from './Components/Login/Login';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import AllPackages from './Components/Packages/AllPackages/AllPackages';
import PackageDetails from './Components/Packages/PackageDetails/PackageDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Signup from './Components/Signup/Signup';
import UpdateBooking from './Components/UpdateBooking/UpdateBooking';
import BookingFormId from './Components/BookingFormId/BookingFormId';
import MyBookings from './Components/MyBookings/MyBookings';
import Galary from './Components/Home/Galary/Galary';
import AddNewPhoto from './Components/AdminArea/AddNewPhoto/AddNewPhoto';
import AllPhotos from './Components/Home/Galary/AllPhotos/AllPhotos';
import BecomeMentor from './Components/Mentors/BecomeMentor/BecomeMentor';
import Mentors from './Components/Mentors/Mentors/Mentors';
import ManageMentors from './Components/Mentors/ManageMentors/ManageMentors';
import ManageDestination from './Components/Manages/ManageDestination/ManageDestination';
import ManagePackage from './Components/Manages/ManagePackage/ManagePackage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigationbar></Navigationbar>
          <Switch>
            <Route exact path='/'>
              <HomePage></HomePage>
            </Route>
            <Route path='/home'>
              <HomePage></HomePage>
            </Route>
            <PrivateRoute path='/bookingpackage/:id'>
              <BookingFormId></BookingFormId>
            </PrivateRoute>
            <PrivateRoute path='/bookingform'>
              <BookingForm></BookingForm>
            </PrivateRoute>
            <Route path='/allpackages'>
              <AllPackages></AllPackages>
            </Route>
            <Route path='/packagedetails/:id'>
              <PackageDetails></PackageDetails>
            </Route>
            <Route path='/destinationdetails/:id'>
              <DestinationDetails></DestinationDetails>
            </Route>
            <Route path='/alldestinations'>
              <AllDestinations></AllDestinations>
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
            <PrivateRoute path='/managementors'>
              <ManageMentors></ManageMentors>
            </PrivateRoute>
            <Route path='/mentors'>
              <Mentors></Mentors>
            </Route>
            <PrivateRoute path='/managepackages'>
              <ManagePackage></ManagePackage>
            </PrivateRoute>
            <Route path='/managedestinations'>
              <ManageDestination></ManageDestination>
            </Route>
            <PrivateRoute path='/becomementor'>
              <BecomeMentor></BecomeMentor>
            </PrivateRoute>
            <PrivateRoute exact path='/bookinglist'>
              <BookingList></BookingList>
            </PrivateRoute>
            <PrivateRoute path='/mybookings/:id'>
              <MyBookings></MyBookings>
            </PrivateRoute>
            <Route path='/addphoto'>
              <AddNewPhoto></AddNewPhoto>
            </Route>
            <Route path='/allphotos'>
              <AllPhotos></AllPhotos>
            </Route>
            <Route path='/bookinglist/:id'>
              <UpdateBooking></UpdateBooking>
            </Route>
            <Route path='/userlogin'>
              <Login></Login>
            </Route>
            <Route path='/usersignup'>
              <Signup></Signup>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
