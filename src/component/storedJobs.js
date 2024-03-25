const getStoredJob = () => {
  const localStoredJob = localStorage.getItem("myJob");
  if (localStoredJob) {
    return JSON.parse(localStoredJob);
  } else {
    return [];
  }
};

const saveJobApplication = (id) => {
  const storedJobApplication = getStoredJob();
  if(storedJobApplication.includes(id)){
    return
  }
  storedJobApplication.push(id);
  localStorage.setItem("myJob", JSON.stringify(storedJobApplication))
};

export {getStoredJob, saveJobApplication}