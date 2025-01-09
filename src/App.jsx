import { useState } from "react";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import DialogCustomExit from "./components/Dialog/Dialog";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      company: "TCS",
      interviewer: "John Doe",
      interviewerEmail: "john@gmail.com",
      candidate: "Alice price",
      candidateEmail: "alice@gmail.com",
      candidatePhone: 9087456321,
      schedulingMethod: { round1: "01-13-25", round2: "01-15-25", round3: "01-20-25" },
      ongoingRound: 1,
      addedOn: "01-10-2025",
    },
  ]);


  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Task Dashboard</h1>
        <Table className="table-auto w-full border-collapse border border-gray-300">
          <TableHeader>
            <TableRow>
              <TableHead className="border px-2 py-2 text-center">Id.</TableHead>
              <TableHead className="border px-2 py-2 text-center">Company</TableHead>
              <TableHead className="border px-2 py-2 text-center">Interviewer</TableHead>
              <TableHead className="border px-2 py-2 text-center">Interviewer Email</TableHead>
              <TableHead className="border px-2 py-2 text-center">Candidate</TableHead>
              <TableHead className="border px-2 py-2 text-center">Candidate Email</TableHead>
              <TableHead className="border px-2 py-2 text-center">Candidate Phone</TableHead>
              <TableHead className="border px-2 py-2 text-center">Scheduling Method</TableHead>
              <TableHead className="border px-2 py-2 text-center">Ongoing Round</TableHead>
              <TableHead className="border px-2 py-2 text-center">Added On</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell className="border px-2 py-2">{task.id}</TableCell>
                <TableCell className="border px-2 py-2">{task.company}</TableCell>
                <TableCell className="border px-2 py-2">{task.interviewer}</TableCell>
                <TableCell className="border px-2 py-2">{task.interviewerEmail}</TableCell>
                <TableCell className="border px-2 py-2">{task.candidate}</TableCell>
                <TableCell className="border px-2 py-2">{task.candidateEmail}</TableCell>
                <TableCell className="border px-2 py-2">{task.candidatePhone}</TableCell>
                <TableCell className="border px-2 py-2">
                  <div className="flex flex-col">
                    <label>
                      Round 1: <span>{task.schedulingMethod.round1}</span>
                    </label>
                    <label>
                      Round 2: <span>{task.schedulingMethod.round2}</span>
                    </label>
                    <label>
                      Round 3: <span>{task.schedulingMethod.round3}</span>
                    </label>
                  </div>
                </TableCell>
                <TableCell className="border px-2 py-2">{task.ongoingRound}</TableCell>
                <TableCell className="border px-2 py-2">{task.addedOn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4">
          {/* <MagneticBasic /> */}
          <DialogCustomExit setTasks={setTasks} tasks={tasks} />
        </div>
      </div>
    </>
  );
}

export default App;
