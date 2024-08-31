import React, { useState } from 'react';
import { Box, Heading, Input, Button, List, ListItem, Flex } from '@chakra-ui/react';

function ScheduleView() {
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [activity, setActivity] = useState('');
  const [schedule, setSchedule] = useState([]);

  const handleAddSchedule = () => {
    if (day.trim() && time.trim() && activity.trim()) {
      setSchedule([...schedule, { day, time, activity }]);
      setDay(''); // Clear the day input
      setTime(''); // Clear the time input
      setActivity(''); // Clear the activity input
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Schedule</Heading>
      <Flex mb={4}>
        <Input
          placeholder="Day (e.g., Monday)"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          mr={2}
        />
        <Input
          placeholder="Time (e.g., 10:00 AM)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          mr={2}
        />
        <Input
          placeholder="Activity (e.g., Math Class)"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          mr={2}
        />
        <Button onClick={handleAddSchedule} colorScheme="teal">
          Add to Schedule
        </Button>
      </Flex>
      <List spacing={3}>
        {schedule.map((item, index) => (
          <ListItem key={index} borderWidth="1px" borderRadius="md" p={2}>
            {item.day} at {item.time}: {item.activity}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default ScheduleView;