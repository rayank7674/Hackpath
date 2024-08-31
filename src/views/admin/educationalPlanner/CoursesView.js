import React, { useState } from 'react';
import { Box, Heading, Input, Button, List, ListItem } from '@chakra-ui/react';

function CoursesView() {
  const [courseName, setCourseName] = useState('');
  const [courses, setCourses] = useState([]);

  const handleAddCourse = () => {
    if (courseName.trim()) {
      setCourses([...courses, courseName]);
      setCourseName(''); // Clear the input field
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Courses</Heading>
      <Input
        placeholder="Enter course name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        mb={2}
      />
      <Button onClick={handleAddCourse} colorScheme="teal" mb={4}>
        Add Course
      </Button>
      <List spacing={3}>
        {courses.map((course, index) => (
          <ListItem key={index} borderWidth="1px" borderRadius="md" p={2}>
            {course}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default CoursesView;