using System;

namespace Common.Astro.Model
{
    public class AstroSign :IComparable<AstroSign>
    {
	    public String Name { get; set; }
        public int Order { get; set; }
		
	    public string TechnicalName { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }

        public int CompareTo(AstroSign other)
        {
            return other == null ? 1 : Order.CompareTo(other.Order);
        }
    }
}
