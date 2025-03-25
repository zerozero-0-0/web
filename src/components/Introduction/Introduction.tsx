import { School, Circle, Activity, BirthOfDate, Hobby } from "./links/Links"
import "./Introduction.css"

export const Introduction = () => {
    return (
      <table className="introduction">
        <tbody>
          <tr>
            <th>"name"</th>
            <td>:</td>
            <td>"Zrzr" | "zerozero" | "zerozero-0-0" | "zerozero-00"</td>
          </tr>
          <tr>
            <th>"school"</th>
            <td>:</td>
            <td> <School/> </td>  
          </tr>          
          <tr>
            <th>"circle"</th>
            <td>:</td>
            <td> <Circle/> </td>
          </tr>
          <tr>
            <th>"activity"</th>
            <td>:</td>
            <td> <Activity/> </td>
          </tr>
          <tr>
            <th>"DateOfBirth"</th>
            <td>:</td>
            <td><BirthOfDate /></td>
          </tr>
          <tr>
            <th>"leisure"</th>
            <td>:</td>
            <td> <Hobby/> </td>
          </tr>
        </tbody>
      </table>
    );
}