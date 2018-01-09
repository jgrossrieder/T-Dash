﻿using System;
using System.Collections.ObjectModel;
using System.Text;

namespace Common.Astro.Model

 
{
	public class HoroscopeSet
	{
		public DateTime Time { get; set; }
        public HoroscopeStatus Status { get; set; }
        public ObservableCollection<Horoscope> Horoscopes { get; set; }

		public HoroscopeSet() {
			Horoscopes = new ObservableCollection<Horoscope>();
		}

		public override string ToString()
		{
			StringBuilder builder = new StringBuilder($"Horsocope for {Time}:{Environment.NewLine}");
			foreach (Horoscope horoscope in Horoscopes)
			{
				builder.AppendLine("--------------------------------------------------------");
				builder.AppendLine(horoscope.ToString());
			}
			return builder.ToString();
		}
	}
}
