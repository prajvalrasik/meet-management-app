import { useState } from "react";
import { useEffect } from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card8/Card";
import InputBox from "../../components/InputBox/InputBox";
import { fetchGroups } from "../../api/groups";
import { User } from "../../models/User";




interface Props {
  user : User;
}
const Dashboard: React.FC<Props> = ({user}) => {
  const [query, setquery] = useState<String>();
  const [usergroup, setusergroup] = useState<any>(
    []
  );


  useEffect(() => {
    fetchGroups({
      status: "all-groups",
      query: query,
    }).then((response) => {
      console.log(response);
      setusergroup(response);
    });
  }, [query]);

console.log("group data " ,usergroup)

  const search = (val: any) => {
    val = val.currentTarget.value;
    setquery(val);
  };

  return (
    <div className=" flex flex-col w-full mt-4 ml-4">
      <Link to="/recordings">
        <span className="text-blue-700 ">
          Lecture recording
        </span>
      </Link>
      
<div className="text-2xl font-semibold py-8 text-center" >{user.first_name}</div>
  

      <div className=" self-center w-10/12 lg:w-1/3 md:w-1/3  ">
        <InputBox
          onChange={search}
          type="text"
          id="search"
          placeholder=" Search"
          className=" h-10"
        ></InputBox>
      </div>
      
      {usergroup.map((u: any) => (
        <Card
          Name={u.name}
          description={u.description}
          imageLink={u.group_image_url}
         
        ></Card>
      ))}
    </div>
    
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);