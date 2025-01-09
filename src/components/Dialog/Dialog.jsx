import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "../ui/dialog";
import MagneticBasic from "@/assets/Magnetik";

const DialogCustomExit = ({setTasks, tasks}) => {
  const customVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
      y: 40,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 40,
    },
  };

  const customTransition = {
    type: "spring",
    bounce: 0,
    duration: 0.25,
  };

  const [formData, setFormData] = useState({
    company: "",
    interviewerName: "",
    interviewerEmail: "",
    candidateName: "",
    candidateEmail: "",
    candidatePhone: "",
    schedulingMethod: {
      round1: "",
      round2: "",
      round3: "",
    },
    ongoingRound: "",
    addedOn: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('schedulingMethod')) {
      const round = name.split('.')[1];
      setFormData(prevState => ({
        ...prevState,
        schedulingMethod: {
          ...prevState.schedulingMethod,
          [round]: value
        }
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
    const newTask = {
      id: newId,
      company: formData.company,
      interviewer: formData.interviewerName,
      interviewerEmail: formData.interviewerEmail,
      candidate: formData.candidateName,
      candidateEmail: formData.candidateEmail,
      candidatePhone: formData.candidatePhone,
      schedulingMethod: formData.schedulingMethod,
      ongoingRound: formData.ongoingRound,
      addedOn: formData.addedOn,
    };
    setTasks(prevTasks => [...prevTasks, newTask]); // Add new task to the tasks state
    setFormData({ // Reset form data
      company: "",
      interviewerName: "",
      interviewerEmail: "",
      candidateName: "",
      candidateEmail: "",
      candidatePhone: "",
      schedulingMethod: {
        round1: "",
        round2: "",
        round3: "",
      },
      ongoingRound: "",
      addedOn: "",
    });
  };

  return (
    <Dialog variants={customVariants} transition={customTransition}>
      <DialogTrigger>
        <MagneticBasic />
      </DialogTrigger>
      <DialogContent className="w-full max-w-md bg-white p-6 dark:bg-zinc-900">
        <DialogHeader>
          <DialogTitle className="text-zinc-900 dark:text-white">Join the Todo Sheet</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="mt-6 flex flex-col space-y-4">
            <label htmlFor="company" className=" text-zinc-900">
              1. Company Name :
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              className="h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 text-base text-zinc-900 outline-none focus:ring-2 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-sm"
              placeholder="Enter your company"
              onChange={handleChange}
            />
            <label htmlFor="interviewerName" className=" text-zinc-900">
              2. Interviewer Name :
            </label>
            <input
              id="interviewerName"
              name="interviewerName"
              type="text"
              value={formData.interviewerName}
              className="h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 text-base text-zinc-900 outline-none focus:ring-2 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-sm"
              placeholder="Enter your interviewer"
              onChange={handleChange}
            />
            <label htmlFor="interviewerEmail" className=" text-zinc-900">
              3. Interviewer Email :
            </label>
            <input
              id="interviewerEmail"
              name="interviewerEmail"
              type="email"
              value={formData.interviewerEmail}
              className="h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 text-base text-zinc-900 outline-none focus:ring-2 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-sm"
              placeholder="Enter your interviewer email"
              onChange={handleChange}
            />
            <label htmlFor="name" className=" text-zinc-900">
              4. Candidate Name :
            </label>
            <input
              id="candidateName"
              name="candidateName"
              type="text"
              value={formData.candidateName}
              className="h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 text-base text-zinc-900 outline-none focus:ring-2 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-sm"
              placeholder="Enter your candidate name"
              onChange={handleChange}
            />
            <label htmlFor="email" className=" text-zinc-900">
              5. Candidate Email :
            </label>
            <input
              id="candidateEmail"
              name="candidateEmail"
              type="email"
              value={formData.candidateEmail}
              className="h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 text-base text-zinc-900 outline-none focus:ring-2 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-sm"
              placeholder="Enter your candidate email"
              onChange={handleChange}
            />
            <label htmlFor="phone" className=" text-zinc-900">
              6. Candidate Phone No. :
            </label>
            <input
              id="candidatePhone"
              name="candidatePhone"
              type="text"
              value={formData.candidatePhone}
              className="h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 text-base text-zinc-900 outline-none focus:ring-2 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-sm"
              placeholder="Enter your candidate phn no."
              onChange={handleChange}
            />
            <label htmlFor="schedule" className=" text-zinc-900">
              7. Scheduling Method :
            </label>
            <div className="flex flex-col">
              <div className="flex justify-around">
                <span>Round 1:</span>
                <input
                  type="date"
                  name="schedulingMethod.round1"
                  value={formData.schedulingMethod.round1}
                  className="border border-zinc-400 rounded-lg px-2 my-1 "
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-around">
                <span>Round 2:</span>
                <input
                  type="date"
                  name= "schedulingMethod.round2"
                  value={formData.schedulingMethod.round2}
                  className="border border-zinc-400 rounded-lg px-2 my-1"
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-around">
                <span>Round 3:</span>
                <input
                  type="date"
                  name= "schedulingMethod.round3"
                  value={formData.schedulingMethod.round3}
                  className="border border-zinc-400 rounded-lg px-2 my-1"
                  onChange={handleChange}
                />
              </div>
            </div>
            <label htmlFor="company" className=" text-zinc-900">
              8. Ongoing Round :
            </label>
            <select
              name="ongoingRound"
              value={formData.ongoingRound}
              className="w-[8rem] border border-zinc-400 rounded-lg px-4 ml-8"
              onChange={handleChange}
            >
              <option value="">select</option>
              <option value="1">Round1</option>
              <option value="2">Round2</option>
              <option value="3">Round3</option>
            </select>
            <label htmlFor="company" className=" text-zinc-900">
              9. Added On :
            </label>
            <input 
              type="date" 
              name="addedOn"
              value={formData.addedOn} 
              className="border border-zinc-400 rounded-lg px-2 my-1" 
              onChange={handleChange}
            />
            <button
              className="inline-flex items-center justify-center self-end rounded-lg bg-black px-4 py-2 text-sm font-medium text-zinc-50 dark:bg-white dark:text-zinc-900"
              type="submit"
            >
              Join now
            </button>
          </div>
        </form>
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
};
export default DialogCustomExit;
