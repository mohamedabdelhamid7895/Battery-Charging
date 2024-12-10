import dayjs from 'dayjs';

export const formatDate = (date: string): string => {
  return dayjs(date).format('HH:mm');
};

export const calculateTimeAgo = (date: string): string => {
  const now = dayjs();
  const then = dayjs(date);
  const diffInMinutes = now.diff(then, 'minute');
  
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  return `${diffInHours}h ago`;
};

export const isWithinLast24Hours = (date: string): boolean => {
  const now = dayjs();
  const then = dayjs(date);
  const diffInHours = now.diff(then, 'hour');
  return diffInHours <= 24;
};