import { ReactComponent as UserPlusIconSVG } from '../../assets/iconSvg/add_user.svg';
import { ReactComponent as AdminIconSVG } from '../../assets/iconSvg/admin.svg';
import { ReactComponent as EyeIconSVG } from '../../assets/iconSvg/eye.svg';
import { ReactComponent as OpenLockIconSVG } from '../../assets/iconSvg/lock.svg';
import { ReactComponent as LockIconSVG } from '../../assets/iconSvg/lock.svg';
import { ReactComponent as UserEditIconSVG } from '../../assets/iconSvg/user_edit.svg';

export const AccessModalData = [
  {
    userType: 'Admin',
    icon: <AdminIconSVG style={{ width: '12px', color: '#434356' }} />,
    permissions: [
      {
        category: 'Add/Remove User',
        hasAccess: 1
      },
      {
        category: 'Create',
        hasAccess: 1
      },
      {
        category: 'Edit',
        hasAccess: 1
      },
      {
        category: 'Approve',
        hasAccess: 1
      },
      {
        category: 'Delete',
        hasAccess: 1
      },
      {
        category: 'View',
        hasAccess: 1
      }
    ]
  },
  {
    userType: 'Full Access',
    icon: <OpenLockIconSVG style={{ width: '12px', color: '#434356' }} />,
    permissions: [
      {
        category: 'Add/Remove User',
        hasAccess: 1
      },
      {
        category: 'Create',
        hasAccess: 1
      },
      {
        category: 'Edit',
        hasAccess: 1
      },
      {
        category: 'Approve',
        hasAccess: 1
      },
      {
        category: 'Delete',
        hasAccess: 1
      },
      {
        category: 'View',
        hasAccess: 1
      }
    ]
  },
  {
    userType: 'Creator',
    icon: <UserPlusIconSVG style={{ width: '12px', color: '#434356' }} />,
    permissions: [
      {
        category: 'Add/Remove User',
        hasAccess: 0
      },
      {
        category: 'Create',
        hasAccess: 1
      },
      {
        category: 'Edit',
        hasAccess: 1
      },
      {
        category: 'Approve',
        hasAccess: 1
      },
      {
        category: 'Delete',
        hasAccess: 1
      },
      {
        category: 'View',
        hasAccess: 1
      }
    ]
  },
  {
    userType: 'Editor',
    icon: <UserEditIconSVG style={{ width: '12px', color: '#434356' }} />,
    permissions: [
      {
        category: 'Add/Remove User',
        hasAccess: 0
      },
      {
        category: 'Create',
        hasAccess: 0
      },
      {
        category: 'Edit',
        hasAccess: 1
      },
      {
        category: 'Approve',
        hasAccess: 1
      },
      {
        category: 'Delete',
        hasAccess: 1
      },
      {
        category: 'View',
        hasAccess: 1
      }
    ]
  },
  {
    userType: 'Viewer',
    icon: <EyeIconSVG style={{ width: '12px', color: '#434356' }} />,
    permissions: [
      {
        category: 'Add/Remove User',
        hasAccess: 0
      },
      {
        category: 'Create',
        hasAccess: 0
      },
      {
        category: 'Edit',
        hasAccess: 0
      },
      {
        category: 'Approve',
        hasAccess: 0
      },
      {
        category: 'Delete',
        hasAccess: 0
      },
      {
        category: 'View',
        hasAccess: 1
      }
    ]
  },
  {
    userType: 'No Access',
    icon: <LockIconSVG style={{ width: '12px', color: '#434356' }} />,
    permissions: [
      {
        category: 'Add/Remove User',
        hasAccess: 0
      },
      {
        category: 'Create',
        hasAccess: 0
      },
      {
        category: 'Edit',
        hasAccess: 0
      },
      {
        category: 'Approve',
        hasAccess: 0
      },
      {
        category: 'Delete',
        hasAccess: 0
      },
      {
        category: 'View',
        hasAccess: 0
      }
    ]
  }
];
