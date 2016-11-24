package org.xsx.jyusns.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {

	private static final int YEAR = 365 * 24 * 60 * 60;// 年
	private static final int MONTH = 30 * 24 * 60 * 60;// 月
	private static final int DAY = 24 * 60 * 60;// 天
	private static final int HOUR = 60 * 60;// 小时
	private static final int MINUTE = 60;// 分钟
	private static final String dateDesc = "yyyyMMddHHmmss";
	private static final Date date = new Date();

	public static String getSeconds(){
		return System.currentTimeMillis() + "";
	}

	public static String formate(Date date){
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm");
		return sdf.format(date);
	}

	public static String getCurrentDate(){
		return formate(new Date());
	}

	public static String getTime(){
		return date.getTime() + "";
	}

	public static String getCurrentDateDesc(){
		SimpleDateFormat sdf=new SimpleDateFormat(dateDesc);
		return sdf.format(new Date());
	}

	public static long getCurrentMillis(){
		return date.getTime();
	}


	/**
	 * 将时间转化为 xx小时xx分钟前
	 * @param date
	 * @return
	 */
	public static String toTime(String date){
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm");
		long timestamp = 0;
		try {
			Date d=sdf.parse(date);
			timestamp=d.getTime();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		long currentTime = System.currentTimeMillis();
		long timeGap = (currentTime - timestamp) / 1000;// 与现在时间相差秒数
		String timeStr = null;
		if (timeGap > YEAR) {
			timeStr = timeGap / YEAR + "年前";
		} else if (timeGap > MONTH) {
			timeStr = timeGap / MONTH + "个月前";
		} else if (timeGap > DAY) {// 1天以上
			timeStr = timeGap / DAY + "天前";
		} else if (timeGap > HOUR) {// 1小时-24小时
			timeStr = timeGap / HOUR + "小时前";
		} else if (timeGap > MINUTE) {// 1分钟-59分钟
			timeStr = timeGap / MINUTE + "分钟前";
		} else {// 1秒钟-59秒钟
			timeStr = "刚刚";
		}
		return timeStr;

	}

}