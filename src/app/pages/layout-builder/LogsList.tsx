import React from 'react';

type Props = {
  className: string;
};

type LogEntry = {
  location: string;
  status: string;
  device: string;
  ipAddress: string;
  time: string;
};

const LogsList: React.FC<Props> = ({ className }) => {
  const logs: LogEntry[] = [
    {
      location: 'USA(5)',
      status: 'OK',
      device: 'Chrome - Windows',
      ipAddress: '236.125.56.78',
      time: '2 mins ago',
    },
    {
      location: 'United Kingdom(10)',
      status: 'OK',
      device: 'Safari - Mac OS',
      ipAddress: '236.125.56.78',
      time: '10 mins ago',
    },
    {
      location: 'Norway(-)',
      status: 'ERR',
      device: 'Firefox - Windows',
      ipAddress: '236.125.56.10',
      time: '20 mins ago',
    },
    {
      location: 'Japan(112)',
      status: 'OK',
      device: 'iOS - iPhone Pro',
      ipAddress: '236.125.56.54',
      time: '30 mins ago',
    },
    {
      location: 'Italy(5)',
      status: 'WRN',
      device: 'Samsung Noted 5- Android',
      ipAddress: '236.100.56.50',
      time: '40 mins ago',
    },
  ];

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Login Sessions</span>
        </h3>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table align-middle table-row-bordered table-row-solid gy-4 gs-9'>
            <thead className='border-gray-200 fs-5 fw-semibold bg-lighten'>
              <tr>
                <th className='min-w-250px'>Location</th>
                <th className='min-w-100px'>Status</th>
                <th className='min-w-150px'>Device</th>
                <th className='min-w-150px'>IP Address</th>
                <th className='min-w-150px'>Time</th>
              </tr>
            </thead>
            <tbody className='fw-6 fw-semibold text-gray-600'>
              {logs.map((log, index) => (
                <tr key={index}>
                  <td>
                    <a href='#' className='text-hover-primary text-gray-600'>
                      {log.location}
                    </a>
                  </td>
                  <td>
                    <span className={`badge badge-light-${log.status === 'OK' ? 'success' : log.status === 'ERR' ? 'danger' : 'warning'} fs-7 fw-bold`}>
                      {log.status}
                    </span>
                  </td>
                  <td>{log.device}</td>
                  <td>{log.ipAddress}</td>
                  <td>{log.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export { LogsList };
