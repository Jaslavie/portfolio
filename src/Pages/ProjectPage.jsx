// suspense and lazy method is used to load the component only when it is called
import { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';

const projectComponents = {
  1: lazy(() => import('../Projects/Dispatch')),
  2: lazy(() => import('../Projects/Nasa')),
};

function ProjectPage() {
    // useParams is used to get the id of the project
  const { id } = useParams();
  // projectComponents[id] is used to get the project component based on the id
  const ProjectComponent = projectComponents[id];

  return (
    <div>
      {ProjectComponent ? (
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectComponent />
        </Suspense>
      ) : (
        <div>Project not found</div>
      )}
    </div>
  );
}

export default ProjectPage;
