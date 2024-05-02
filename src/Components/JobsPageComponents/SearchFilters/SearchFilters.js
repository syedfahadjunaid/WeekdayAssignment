import React, { useState } from "react";
import "./SearchFilters.css";

import SearchAndSelectDropdown from "../../StylingComponents/SearchAndSelectDropdown";
import SelectComponent from "../../StylingComponents/SelectComponent";

import { useSelector, useDispatch } from "react-redux";

import { filterJobs } from "../../../Store/Slices/JobsDataSlice";

export default function SearchFilters() {
  const dispatch = useDispatch();
  const {
    jobs,
    techStackData,
    minBasePaySalary,
    remoteOrNotData,

    filterDataOptions,
  } = useSelector((state) => state.JobsDataState);

  // console.log(jobs?.jdList);

  const [role, setRole] = useState("");
  const [minExperience, setMinExperience] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [remoteOrNot, setRemoteOrNot] = useState("");
  const [techStack, setTechStack] = useState("");
  const [minBasePay, setMinBasePay] = useState("");

  React.useEffect(() => {
    dispatch(
      filterJobs({
        jobRole: role,
        location: location,
        minExp: minExperience,
        remoteOnSite: remoteOrNot,
        techStack: techStack,
        companyName: companyName,
        minBasePay: minBasePay,
      })
    );
  }, [
    role,
    minExperience,
    companyName,
    location,
    remoteOrNot,
    techStack,
    minBasePay,
  ]);

  return (
    <div className='JobSearchFilter'>
      <SearchAndSelectDropdown
        setState={setRole}
        data={jobs?.jdList?.map((data) => data.jobRole.toUpperCase())}
        placeholder='Role'
      />
      <SelectComponent
        options={jobs?.jdList?.map((data) => data.minExp).sort((a, b) => a > b)}
        data={minExperience}
        setData={setMinExperience}
        placeholder='Min Experience'
      />
      <SelectComponent
        options={jobs?.jdList?.map((data) => data.companyName)}
        data={companyName}
        setData={setCompanyName}
        placeholder='Company Name'
      />
      <SelectComponent
        options={jobs?.jdList?.map((data) => data.location.toUpperCase())}
        data={location}
        setData={setLocation}
        placeholder='Location'
      />
      <SelectComponent
        options={remoteOrNotData}
        data={remoteOrNot}
        setData={setRemoteOrNot}
        placeholder='Remote/on-site'
      />
      <SelectComponent
        options={techStackData.map((data) => data.toUpperCase())}
        data={techStack}
        setData={setTechStack}
        placeholder='Tech Stack'
      />
      <SelectComponent
        options={minBasePaySalary.map((data) => data.toUpperCase())}
        data={minBasePay}
        setData={setMinBasePay}
        placeholder='Min Base Pay'
      />
    </div>
  );
}
