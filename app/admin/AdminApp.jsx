"use client";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { CourseCreate, CourseEdit, CourseList } from "./Course";
import { UnitList, UnitEdit, UnitCreate } from "./Unit";
import { LessonCreate, LessonEdit, LessonList } from "./Lesson";
import { ChallengeCreate, ChallengeEdit, ChallengeList } from "./Challenge";
import {
  ChallengeOptionCreate,
  ChallengeOptionEdit,
  ChallengeOptionList,
} from "./ChallengeOption";

const dataProvider = simpleRestProvider("/api");

const AdminApp = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
        recordRepresentation={"title"}
      />
      <Resource
        name="units"
        list={UnitList}
        create={UnitCreate}
        edit={UnitEdit}
        recordRepresentation={"title"}
      />
      <Resource
        name="lessons"
        list={LessonList}
        create={LessonCreate}
        edit={LessonEdit}
        recordRepresentation={"title"}
      />
      <Resource
        name="challenges"
        list={ChallengeList}
        create={ChallengeCreate}
        edit={ChallengeEdit}
        recordRepresentation={"question"}
      />
      <Resource
        name="challengeOptions"
        list={ChallengeOptionList}
        create={ChallengeOptionCreate}
        edit={ChallengeOptionEdit}
        recordRepresentation={"text"}
        options={{ label: "Challenge Options" }}
      />
    </Admin>
  );
};

export default AdminApp;
