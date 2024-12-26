import React, { useState, useEffect } from "react";
import { AssignContainer, InputPair, InputField, RoleText } from '../../styles/components/AssignOperatorsStyles';
import { InputRow, Label, SaveButton, InputLine, LabelTitle } from '../../styles/components/TempContentStyles';
import { NumberInputDefault } from "./NumberInputDefault";

const AssignOperators = () => {
    const [value1, setValue1] = useState(4);
    const [value2, setValue2] = useState(7);
    const [technician, setTechnician] = useState(null);
    const [manager, setManager] = useState(null);

    // Fetch operators on component mount
    useEffect(() => {
        const fetchOperators = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/operators/');
                const data = await response.json();
                setTechnician(data.technician);
                setManager(data.manager);

                // Fetch existing assignments
                const assignmentsResponse = await fetch('http://localhost:8000/api/operator-assignments/');
                const assignmentsData = await assignmentsResponse.json();
                
                // Set initial values based on existing assignments
                assignmentsData.forEach(assignment => {
                    if (assignment.operator === data.technician?.id_utilisateur) {
                        setValue1(assignment.max_alerts);
                    } else if (assignment.operator === data.manager?.id_utilisateur) {
                        setValue2(assignment.max_alerts);
                    }
                });
            } catch (error) {
                console.error('Error fetching operators:', error);
            }
        };

        fetchOperators();
    }, []);

    const handleSave = async () => {
        try {
            const assignments = [
                {
                    operator: technician?.id_utilisateur,
                    max_alerts: value1
                },
                {
                    operator: manager?.id_utilisateur,
                    max_alerts: value2
                }
            ].filter(assignment => assignment.operator); // Only include assignments with valid operators

            const response = await fetch('http://localhost:8000/api/operator-assignments/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(assignments)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            alert('Operator assignments saved successfully!');
        } catch (error) {
            console.error('Error saving assignments:', error);
            alert('Error saving operator assignments');
        }
    };

    return (
        <AssignContainer>
            <LabelTitle>Assign Operators and Configure Alerts Thresholds</LabelTitle>
            {technician && (
                <InputLine>
                    <InputRow>
                        <Label>Max Alerts Number</Label>
                        <NumberInputDefault value={value1} setValue={setValue1} />
                    </InputRow>
                    <InputRow>
                        <Label>Sent To</Label>
                        <RoleText>
                            {technician.nom} {technician.prenom} - {technician.role}
                        </RoleText>
                    </InputRow>
                </InputLine>
            )}
            {manager && (
                <InputLine>
                    <InputRow>
                        <Label>Max Alerts Number</Label>
                        <NumberInputDefault value={value2} setValue={setValue2} />
                    </InputRow>
                    <InputRow>
                        <Label>Sent To</Label>
                        <RoleText>
                            {manager.nom} {manager.prenom} - {manager.role}
                        </RoleText>
                    </InputRow>
                </InputLine>
            )}
            <SaveButton onClick={handleSave}>Save</SaveButton>
        </AssignContainer>
    );
};

export default AssignOperators;