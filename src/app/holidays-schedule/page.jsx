import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Holiday Schedule',
  description:
    'Review the Genie holiday trading schedule, including market hours and closures across instruments.',
  path: '/holidays-schedule',
  keywords: ['holiday schedule', 'trading hours', 'Genie market schedule'],
});

const dates = [
  { label: 'Mon, Jun 8', key: 'jun8' },
  { label: 'Fri, Jun 19', key: 'jun19' },
]

const scheduleData = [
  {
    category: 'FX',
    symbol: 'FX',
    jun8: 'Normal Trading Hours',
    jun19: 'Normal Trading Hours',
  },
  {
    category: 'Metals',
    symbol: 'Metals',
    jun8: 'Normal Trading Hours',
    jun19: 'Early Close @20:00',
  },
  {
    category: 'OIL/Energies',
    symbol: 'BRNUSD',
    jun8: 'Normal Trading Hours',
    jun19: 'Early Close @20:30',
  },
  {
    category: 'OIL/Energies',
    symbol: 'WTIUSD',
    jun8: 'Normal Trading Hours',
    jun19: 'Early Close @20:00',
  },
  {
    category: 'OIL/Energies',
    symbol: 'NGCUSD',
    jun8: 'Normal Trading Hours',
    jun19: 'Early Close @20:00',
  },
  {
    category: 'Indices',
    symbol: 'AUS200c',
    jun8: 'Late Open @ 10:10',
    jun19: 'Normal Trading Hours',
  },
  {
    category: 'Indices',
    symbol: 'CN50c',
    jun8: 'Normal Trading Hours',
    jun19: 'Closed',
  },
  {
    category: 'Indices',
    symbol: 'EU50c',
    jun8: 'Normal Trading Hours',
    jun19: 'Normal Trading Hours',
  },
  {
    category: 'Indices',
    symbol: 'GER40c',
    jun8: 'Normal Trading Hours',
    jun19: 'Normal Trading Hours',
  },
  {
    category: 'Indices',
    symbol: 'HK50c',
    jun8: 'Normal Trading Hours',
    jun19: 'Closed',
  },
  {
    category: 'Indices',
    symbol: 'JPN225c',
    jun8: 'Normal Trading Hours',
    jun19: 'Early Close @20:00',
  },
  {
    category: 'Indices',
    symbol: 'SPA35c',
    jun8: 'Normal Trading Hours',
    jun19: 'Normal Trading Hours',
  },
  {
    category: 'Indices',
    symbol: 'UK100c',
    jun8: 'Normal Trading Hours',
    jun19: 'Early Close @20:00',
  },
  {
    category: 'Indices',
    symbol: 'US30c',
    jun8: 'Normal Trading Hours',
    jun19: 'Early Close @20:00',
  },
  {
    category: 'Indices',
    symbol: 'US500c',
    jun8: 'Normal Trading Hours',
    jun19: 'Early Close @20:00',
  },
  {
    category: 'Indices',
    symbol: 'USTECHc',
    jun8: 'Normal Trading Hours',
    jun19: 'Early Close @20:00',
  },
  {
    category: 'EU Shares',
    symbol: 'Exchanges - SIX',
    jun8: 'Normal Trading Hours',
    jun19: 'Normal Trading Hours',
  },
  {
    category: 'EU Shares',
    symbol: 'Exchanges - BM',
    jun8: 'Normal Trading Hours',
    jun19: 'Normal Trading Hours',
  },
  {
    category: 'EU Shares',
    symbol: 'Exchanges - EURONEXT',
    jun8: 'Normal Trading Hours',
    jun19: 'Normal Trading Hours',
  },
  {
    category: 'EU Shares',
    symbol: 'Exchanges - LSE',
    jun8: 'Normal Trading Hours',
    jun19: 'Normal Trading Hours',
  },
  {
    category: 'EU Shares',
    symbol: 'Exchanges - XETRA',
    jun8: 'Normal Trading Hours',
    jun19: 'Normal Trading Hours',
  },
  {
    category: 'US Shares',
    symbol: 'Exchanges - NYSE',
    jun8: 'Normal Trading Hours',
    jun19: 'Early Close @20:00',
  },
  {
    category: 'US Shares',
    symbol: 'Exchanges - NDAQ',
    jun8: 'Normal Trading Hours',
    jun19: 'Early Close @20:00',
  },
  {
    category: 'Asia Shares',
    symbol: 'Exchanges - HKEX',
    jun8: 'Normal Trading Hours',
    jun19: 'Closed',
  },
  {
    category: 'Asia Shares',
    symbol: 'Exchanges - TSE',
    jun8: 'Normal Trading Hours',
    jun19: 'Normal Trading Hours',
  },
  {
    category: 'Crypto',
    symbol: 'Crypto',
    jun8: 'Normal Trading Hours',
    jun19: 'Normal Trading Hours',
  },
  {
    category: 'Futures',
    symbol: 'GOLD',
    jun8: 'Normal Trading Hours',
    jun19: 'Early Close @20:00',
  },
]

const visibleDates = dates.filter((date) =>
  scheduleData.some((row) => row[date.key] !== 'Normal Trading Hours')
)

const groupedScheduleData = scheduleData.reduce((groups, row) => {
  const lastGroup = groups[groups.length - 1]

  if (lastGroup?.category === row.category) {
    lastGroup.rows.push(row)
    return groups
  }

  return [...groups, { category: row.category, rows: [row] }]
}, [])

function getCellStyle(value) {
  if (value === 'Closed') {
    return 'text-red-300 font-semibold'
  }

  if (value === 'Normal Trading Hours') {
    return 'text-green-300'
  }

  return 'text-yellow-200 font-medium'
}

export default function HolidaySchedule() {
  return (
    <div className="min-h-screen bg-[url('/homepage/Homepage-02.webp')] bg-cover bg-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-center text-4xl font-bold text-white">
          June 2026 Trading Schedule
        </h1>
        <p className="mb-10 text-center text-sm text-white/80">
          All times in GMT+2
        </p>

        <div className="overflow-hidden rounded-lg bg-white/10 shadow-2xl backdrop-blur-sm">
          <div className="overflow-x-auto">
          <table className="w-full text-white">
  <thead>
    <tr className="bg-white/20">
      <th className="hidden sm:table-cell sticky left-0 z-10 w-40 min-w-40 bg-[#9008D5] px-4 py-3 text-left text-sm font-semibold">
        Category
      </th>

      <th className="sticky left-0 sm:left-40 z-10 w-28 min-w-28 sm:w-56 sm:min-w-56 bg-[#9008D5] px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold">
        Symbols
      </th>

      {visibleDates.map((date) => (
        <th
          key={date.key}
          className="whitespace-nowrap px-2 sm:px-4 py-3 text-center text-[11px] sm:text-xs font-semibold"
        >
          {date.label}
          <br />
          <span className="font-normal text-white/70">2026</span>
        </th>
      ))}
    </tr>
  </thead>

  <tbody>
    {groupedScheduleData.map((group) =>
      group.rows.map((row, rowIndex) => (
        <tr
          key={row.symbol}
          className={`transition-colors hover:bg-white/5 ${
            rowIndex === 0
              ? 'border-t-2 border-white/20'
              : 'border-t border-white/10'
          }`}
        >
          {rowIndex === 0 && (
            <td
              rowSpan={group.rows.length}
              className="hidden sm:table-cell sticky left-0 w-40 min-w-40 bg-[#9008D5] px-4 py-3 text-center align-middle text-sm font-semibold whitespace-nowrap"
            >
              {group.category}
            </td>
          )}

          <td
            className="
              sticky left-0 sm:left-40
              w-28 min-w-28
              sm:w-56 sm:min-w-56
              border-l border-white/10
              bg-[#9008D5]
              px-2 sm:px-4
              py-3
              text-xs sm:text-sm
              font-medium
              whitespace-nowrap
            "
          >
            {row.symbol}
          </td>

          {visibleDates.map((date) => (
            <td
              key={date.key}
              className={`px-2 sm:px-4 py-3 text-center text-xs sm:text-sm whitespace-nowrap ${getCellStyle(
                row[date.key]
              )}`}
            >
              {row[date.key]}
            </td>
          ))}
        </tr>
      ))
    )}
  </tbody>
</table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 rounded-lg bg-white/10 px-6 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-300" />
              <span className="text-sm text-white">Normal Trading Hours</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-300" />
              <span className="text-sm text-white">Closed</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-yellow-200" />
              <span className="text-sm text-white">Adjusted Hours</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-4xl space-y-3 text-sm text-white/80">
          <p>All other June 2026 dates will follow the normal trading schedule.</p>
        </div>
      </div>
    </div>
  )
}
