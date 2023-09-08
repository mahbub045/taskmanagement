import React, { useState } from 'react';

const AssignTask = ({ teamMembers, assignTask }) => {
    const [selectedMember, setSelectedMember] = useState('');

    const handleAssignTask = () => {
        const taskId = localStorage.getItem('id');
        if (selectedMember && taskId) {
            assignTask(taskId, selectedMember);
            setSelectedMember('');
        }
    };

    return (
        <div>
            <label htmlFor="assignee">Assign To:</label>
            <select
                id="assignee"
                value={selectedMember}
                onChange={(e) => setSelectedMember(e.target.value)}
            >
                <option value="">Select a team member</option>
                {teamMembers.map((member) => (
                    <option key={member.id} value={member.name}>
                        {member.name}
                    </option>
                ))}
            </select>
            <button className='px-2 text-green-600 hover:underline' onClick={handleAssignTask}>Assign Task</button>
        </div>
    );
};

export default AssignTask;
