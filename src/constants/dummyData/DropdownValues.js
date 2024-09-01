import { ReactComponent as UserPlusIconSVG } from '../../assets/iconSvg/add_user.svg';
import { ReactComponent as AdminIconSVG } from '../../assets/iconSvg/admin.svg';
import { ReactComponent as EyeIconSVG } from '../../assets/iconSvg/eye.svg';
import { ReactComponent as OpenLockIconSVG } from '../../assets/iconSvg/lock.svg';
import { ReactComponent as UserEditIconSVG } from '../../assets/iconSvg/user_edit.svg';

export const SpaceSortDropdownData = [
  { value: 'Most recent updated', id: 1 },
  { value: 'Newest space first', id: 2 },
  { value: 'Oldest space first', id: 3 },
  { value: 'Space name A - Z', id: 4 },
  { value: 'Space name Z - A', id: 5 }
];

export const LeadsSortDropdownData = [
  { value: 'Most recent updated', id: 1 },
  { value: 'Newest first', id: 2 },
  { value: 'Oldest first', id: 3 },
  { value: 'Name A - Z', id: 4 },
  { value: 'Name Z - A', id: 5 }
];

export const NotificationsSortDropdownData = [
  { value: 'Newest first', id: 1 },
  { value: 'Oldest first', id: 2 }
];

export const AccessDropdownData = [
  {
    value: 'Admin',
    id: 1,
    icon: <AdminIconSVG style={{ width: '12px', color: '#05447a' }} />
  },
  {
    value: 'Full Access',
    id: 2,
    icon: <OpenLockIconSVG style={{ width: '12px', color: '#05447a' }} />
  },
  {
    value: 'Creator',
    id: 3,
    icon: <UserEditIconSVG style={{ width: '12px', color: '#05447a' }} />
  },
  {
    value: 'Editor',
    id: 4,
    icon: <UserPlusIconSVG style={{ width: '12px', color: '#05447a' }} />
  },
  {
    value: 'Viewer',
    id: 5,
    icon: <EyeIconSVG style={{ width: '12px', color: '#05447a' }} />
  }
];
