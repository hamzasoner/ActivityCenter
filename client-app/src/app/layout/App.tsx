import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { List, Header, Container } from "semantic-ui-react";
import { Activity } from "../Models/Activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
// import List from 'semantic-ui-react/dist/commonjs/elements/List';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard activities={activities} />
      </Container>
    </>
  );
}

export default App;
