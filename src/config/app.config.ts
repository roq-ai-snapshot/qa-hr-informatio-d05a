interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Admin', 'Employee', 'HR Manager'],
  tenantName: 'Company',
  applicationName: 'QA HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
