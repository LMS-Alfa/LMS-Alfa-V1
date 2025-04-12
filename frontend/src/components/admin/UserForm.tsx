import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiX, FiUser, FiMail, FiKey, FiShield, FiCalendar } from 'react-icons/fi';

// User interface matching the one in Users.tsx
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
  createdAt: string;
}

interface UserFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (user: Partial<User>) => void;
  initialData?: Partial<User>;
  formTitle: string;
}

const UserForm: React.FC<UserFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  formTitle
}) => {
  // Form state
  const [formData, setFormData] = useState<Partial<User>>({
    name: '',
    email: '',
    role: 'Student',
    status: 'active',
  });
  
  // Password fields (only for new users)
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Validation state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form with data if editing
  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData
      });
    }
  }, [initialData]);
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  // Handle password changes
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.password;
        return newErrors;
      });
    }
  };
  
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    if (errors.confirmPassword) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.confirmPassword;
        return newErrors;
      });
    }
  };
  
  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name?.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.role) {
      newErrors.role = 'Role is required';
    }
    
    if (!formData.status) {
      newErrors.status = 'Status is required';
    }
    
    // Password validation (only for new users)
    if (!initialData?.id) {
      if (!password) {
        newErrors.password = 'Password is required';
      } else if (password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
      
      if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Include password in submission for new users
      const userData = initialData?.id
        ? formData
        : { ...formData, password };
        
      onSubmit(userData);
      
      // Reset form after submission
      if (!initialData?.id) {
        setFormData({
          name: '',
          email: '',
          role: 'Student',
          status: 'active',
        });
        setPassword('');
        setConfirmPassword('');
      }
      
      setIsSubmitting(false);
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <ModalOverlay
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ModalContent
        as={motion.div}
        initial={{ scale: 0.9, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 50, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
      >
        <ModalHeader>
          <ModalTitle>{formTitle}</ModalTitle>
          <CloseButton onClick={onClose}>
            <FiX />
          </CloseButton>
        </ModalHeader>
        
        <form onSubmit={handleSubmit}>
          <FormGrid>
            <FormGroup>
              <FormLabel htmlFor="name">
                <FiUser />
                <span>Full Name</span>
              </FormLabel>
              <FormInput
                id="name"
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
                placeholder="Enter full name"
                $hasError={!!errors.name}
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">
                <FiMail />
                <span>Email Address</span>
              </FormLabel>
              <FormInput
                id="email"
                name="email"
                type="email"
                value={formData.email || ''}
                onChange={handleChange}
                placeholder="Enter email address"
                $hasError={!!errors.email}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>
            
            {!initialData?.id && (
              <>
                <FormGroup>
                  <FormLabel htmlFor="password">
                    <FiKey />
                    <span>Password</span>
                  </FormLabel>
                  <FormInput
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter password"
                    $hasError={!!errors.password}
                  />
                  {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="confirmPassword">
                    <FiKey />
                    <span>Confirm Password</span>
                  </FormLabel>
                  <FormInput
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder="Confirm password"
                    $hasError={!!errors.confirmPassword}
                  />
                  {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
                </FormGroup>
              </>
            )}
            
            <FormGroup>
              <FormLabel htmlFor="role">
                <FiShield />
                <span>Role</span>
              </FormLabel>
              <FormSelect
                id="role"
                name="role"
                value={formData.role || ''}
                onChange={handleChange}
                $hasError={!!errors.role}
              >
                <option value="">Select a role</option>
                <option value="Admin">Admin</option>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
                <option value="Parent">Parent</option>
              </FormSelect>
              {errors.role && <ErrorMessage>{errors.role}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="status">
                <FiCalendar />
                <span>Status</span>
              </FormLabel>
              <FormSelect
                id="status"
                name="status"
                value={formData.status || ''}
                onChange={handleChange}
                $hasError={!!errors.status}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </FormSelect>
              {errors.status && <ErrorMessage>{errors.status}</ErrorMessage>}
            </FormGroup>
          </FormGrid>
          
          <ButtonGroup>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : initialData?.id ? 'Update User' : 'Create User'}
            </SubmitButton>
          </ButtonGroup>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${props => props.theme.spacing[4]};
`;

const ModalContent = styled.div`
  background-color: ${props => props.theme.colors.background.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.lg};
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  padding: ${props => props.theme.spacing[6]};
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing[6]};
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.5rem;
  font-weight: 600;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${props => props.theme.borderRadius.full};
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.tertiary};
    color: ${props => props.theme.colors.text.primary};
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing[5]};
  margin-bottom: ${props => props.theme.spacing[6]};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[2]};
`;

const FormLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[1]};
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
  font-weight: 500;
`;

interface FormInputProps {
  $hasError?: boolean;
}

const FormInput = styled.input<FormInputProps>`
  padding: ${props => props.theme.spacing[3]};
  border: 1px solid ${props => props.$hasError 
    ? props.theme.colors.accent.red 
    : props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.95rem;
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
  transition: all ${props => props.theme.transition.fast};
  
  &:focus {
    outline: none;
    border-color: ${props => props.$hasError 
      ? props.theme.colors.accent.red 
      : props.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${props => props.$hasError 
      ? 'rgba(220, 38, 38, 0.1)' 
      : props.theme.colors.primary[100]};
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.text.tertiary};
  }
`;

const FormSelect = styled.select<FormInputProps>`
  padding: ${props => props.theme.spacing[3]};
  border: 1px solid ${props => props.$hasError 
    ? props.theme.colors.accent.red 
    : props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.95rem;
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
  transition: all ${props => props.theme.transition.fast};
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  padding-right: 40px;
  
  &:focus {
    outline: none;
    border-color: ${props => props.$hasError 
      ? props.theme.colors.accent.red 
      : props.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${props => props.$hasError 
      ? 'rgba(220, 38, 38, 0.1)' 
      : props.theme.colors.primary[100]};
  }
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.accent.red};
  font-size: 0.8rem;
  margin-top: ${props => props.theme.spacing[1]};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${props => props.theme.spacing[3]};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const CancelButton = styled.button`
  padding: ${props => `${props.theme.spacing[2]} ${props.theme.spacing[4]}`};
  background-color: ${props => props.theme.colors.background.secondary};
  color: ${props => props.theme.colors.text.primary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.tertiary};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    order: 2;
  }
`;

const SubmitButton = styled.button`
  padding: ${props => `${props.theme.spacing[2]} ${props.theme.spacing[4]}`};
  background-color: ${props => props.theme.colors.primary[600]};
  color: white;
  border: 1px solid ${props => props.theme.colors.primary[600]};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${props => props.theme.transition.fast};
  min-width: 120px;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary[700]};
    border-color: ${props => props.theme.colors.primary[700]};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    order: 1;
    margin-bottom: ${props => props.theme.spacing[2]};
  }
`;

export default UserForm; 