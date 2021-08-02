import { FC, memo, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/SideBar";
import Header from "../../components/Header";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import RecordingPage from "./Recordings.page"
import { User } from "../../models/User";



interface Props { 
  user : User;

}

const AppContainer: FC<Props> = ({user}) => {

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <div className="flex">
                    <div>
                        <Sidebar />
                    </div>
                        <Switch>
                            {/* <Sidebar show={true} /> */}

                            <Route path="/dashboard">
                            <DashboardPage user = {user}></DashboardPage>
                            </Route>
                            
                            <Route path="/batch/:batchNumber/lecture/:lectureNumber">
                                <LecturePage></LecturePage>
                            </Route>
                            <RecordingPage />
                        </Switch>
                    
                </div >
            </div>
        </div>


    );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);