import TeacherLanding from "../view/TeacherLanding.tsx";
import ReadingList from "../components/ReadingList.tsx";

export const TeacherRoutes =[
    {
        path:"/",
        element: <TeacherLanding />,
    },
    {
        path:"/reading-list",
        element: <ReadingList />,
    }
];